import { Button } from '../../components/buttons';
import { Calendar } from '../../components/calendar';
import { FormDateField, FormTextField } from '../../components/form-fields';
import { reservations } from '../../lib/directus';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormEvent, useState } from 'react';
import { Range } from 'react-date-range';
import { H1, H2 } from 'src/components/typography';

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
    <form onSubmit={handleSubmit} className='gap- mb-20 flex w-full flex-col items-center gap-8'>
      <H1>Rezervace</H1>
      <div className='items flex w-[70%] flex-col'>
        <H2>Osobní údaje</H2>
        <div className='grid grid-cols-2 gap-4'>
          <FormTextField label='Jméno' name='firstName' />
          <FormTextField label='Příjmení' name='lastName' />
          <FormDateField label='Datum narození' name='birthDate' />
          <FormTextField label='Adresa' name='address' />
          <FormTextField label='E-mail' name='mail' />
          <FormTextField label='Telefon' name='phone' />
        </div>
      </div>
      <Calendar handleChange={setDateRange} />
      <Button label='Rezervovat' type='submit' />
    </form>
  );
}
