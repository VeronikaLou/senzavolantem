import { Reservation } from '../models/reservation';
import { Directus } from '@directus/sdk';

type Collections = {
  reservations: Reservation;
};

// const directus = new Directus(process.env.DIRECTUS_URL);
const directus = new Directus<Collections>('https://882fmdgg.directus.app/');

const reservations = directus.items('reservations');

export { directus, reservations };
