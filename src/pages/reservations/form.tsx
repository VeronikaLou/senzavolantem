import { reservations } from '../../lib/directus';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';
import { Button } from 'src/components/buttons';
import { FormDateField, FormTextField } from 'src/components/form-fields';
import { Layout } from 'src/components/layout';

export default function Form() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const reservation = await reservations.createOne({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      mail: event.target.mail.value,
      phone: event.target.phone.value,
      from: event.target.from.value,
      birthDate: event.target.birthDate.value,
      to: event.target.to.value,
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
          <FormDateField label='Od' name='from' />
          <FormDateField label='Do' name='to' />
          <Button label='Rezervovat' type='submit' />
        </form>
      </div>
    </Layout>
  );
}
