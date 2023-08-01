type CardData = {
  card_number: string;
  expiration_month: string;
  expiration_year: string;
};

function isCardExpired(expiration_month: string, expiration_year: string): boolean {
  const currentDate = new Date();
  const expirationDate = new Date(
    parseInt(expiration_year, 10),
    parseInt(expiration_month, 10) - 1
  );
  return expirationDate < currentDate;
}

function getCardData(token: string): CardData | null {
  const cardDataStore: Record<string, CardData> = {
    'TOKEN1234567890': {
      card_number: '************1234',
      expiration_month: '08',
      expiration_year: '2024',
    },
    'TOKEN0987654321': {
      card_number: '************5678',
      expiration_month: '06',
      expiration_year: '2022',
    },
  };

  const cardData = cardDataStore[token];

  if (!cardData) {
    return null; // No se encontraron datos de tarjeta para el token proporcionado
  }

  if (isCardExpired(cardData.expiration_month, cardData.expiration_year)) {
    throw new Error('La tarjeta ha expirado');
  }

  return { ...cardData };
}

// Ejemplo de cómo utilizar la función getCardData:

const token = 'TOKEN1234567890';
const cardData = getCardData(token);

if (cardData) {
  // Datos de tarjeta válidos
  console.log('Número de tarjeta:', cardData.card_number);
  console.log('Mes de expiración:', cardData.expiration_month);
  console.log('Año de expiración:', cardData.expiration_year);
} else {
  // No se encontraron datos de tarjeta para el token proporcionado
  console.log('No se encontraron datos de tarjeta para el token proporcionado');
}
