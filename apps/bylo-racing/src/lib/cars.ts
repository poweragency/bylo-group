import rawCars from '@/data/cars.placeholder.json';

export type Fuel = 'benzina' | 'diesel' | 'ibrida' | 'elettrica' | 'gpl' | 'metano';
export type Transmission = 'manuale' | 'automatico';

export interface Car {
  slug: string;
  brand: string;
  model: string;
  version?: string;
  year: number;
  km: number;
  price: number;
  fuel: Fuel;
  transmission: Transmission;
  power_kw: number;
  power_cv: number;
  color: string;
  image: string;
  description: string;
  as24_url?: string;
}

export const cars: Car[] = rawCars as Car[];

export function getCar(slug: string): Car | undefined {
  return cars.find((c) => c.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatKm(km: number): string {
  return new Intl.NumberFormat('it-IT').format(km) + ' km';
}

export function formatFuel(fuel: Fuel): string {
  const map: Record<Fuel, string> = {
    benzina: 'Benzina',
    diesel: 'Diesel',
    ibrida: 'Ibrida',
    elettrica: 'Elettrica',
    gpl: 'GPL',
    metano: 'Metano',
  };
  return map[fuel];
}
