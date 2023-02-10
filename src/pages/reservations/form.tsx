import { Button } from '../../components/buttons';
import { Calendar } from '../../components/calendar';
import { FormCustomField, FormDateField, FormTextField } from '../../components/form-fields';
import { Layout } from '../../components/layout';
import { reservations } from '../../lib/directus';
import { formatDate } from '../../utils/date';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
import { Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// import { useCalendar } from 'src/components/calendar';

export default function Form() {
  const router = useRouter();

  const [dateRange, setDateRange] = useState<Range | undefined>(undefined);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const reservation = await reservations.createOne({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      mail: event.target.mail.value,
      phone: event.target.phone.value,
      from: dateRange?.startDate,
      birthDate: event.target.birthDate.value,
      to: dateRange?.endDate,
      status: 'created',
      address: event.target.address.value,
    });

    if (reservation?.id) {
      router.push(`/reservations/${reservation.id}`);
    }
  };

  return (
    <Layout>
      <div className='mb-20 flex flex-col items-center'>
        <form onSubmit={handleSubmit} className='flex w-[600px] flex-col items-center gap-3'>
          <FormTextField label='Jméno' name='firstName' />
          <FormTextField label='Příjmení' name='lastName' />
          <FormDateField label='Datum narození' name='birthDate' />
          <FormTextField label='Adresa' name='address' />
          <FormTextField label='E-mail' name='mail' />
          <FormTextField label='Telefon' name='phone' />
          <FormCustomField
            label='Termín'
            value={
              dateRange
                ? `${formatDate(dateRange.startDate)} - ${formatDate(dateRange.endDate)}`
                : ''
            }
          />
          <Calendar handleChange={setDateRange} />
          <Button label='Rezervovat' type='submit' />
        </form>
      </div>
    </Layout>
  );
}
