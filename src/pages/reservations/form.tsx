import { Button } from '../../components/buttons';
import { Calendar } from '../../components/calendar';
import { FormCustomField, FormDateField, FormTextField } from '../../components/form-fields';
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

    const target = event.target as typeof event.target & {
      firstName: { value: string };
      lastName: { value: string };
      mail: { value: string };
      phone: { value: string };
      address: { value: string };
      birthDate: { value: string };
    };

    const reservation = await reservations.createOne({
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      mail: target.mail.value,
      phone: target.phone.value,
      from: dateRange?.startDate,
      birthDate: target.birthDate.value,
      to: dateRange?.endDate,
      status: 'created',
      address: target.address.value,
    });

    if (reservation?.id) {
      router.push(`/reservations/${reservation.id}`);
    }
  };

  return (
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
            dateRange ? `${formatDate(dateRange.startDate)} - ${formatDate(dateRange.endDate)}` : ''
          }
        />
        <Calendar handleChange={setDateRange} />
        <Button label='Rezervovat' type='submit' />
      </form>
    </div>
  );
}
