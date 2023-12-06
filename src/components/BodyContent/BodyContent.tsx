import React, { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const BodyContent: React.FC = () => {
  const [desmatamento, setDesmatamento] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sua-api.com/desmatamento');
        const data = await response.json();

        setDesmatamento(data.quantidadeDesmatada);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <Flex direction="column" align="center"  p="4" h="100vh">
      <Flex gap={4} >
        <img src="/src/assets/2021.jpg" alt="Satélite 1" style={{ width: '40%' }} />
        <img src="/src/assets/2022.jpg" alt="Satélite 2" style={{ width: '40%' }} />
      </Flex>
      {desmatamento !== null && (
        <Text fontSize="sm" mt="4">
          Desmatamento: {desmatamento} hectares
        </Text>
      )}
    </Flex>
  );
};

export default BodyContent;


