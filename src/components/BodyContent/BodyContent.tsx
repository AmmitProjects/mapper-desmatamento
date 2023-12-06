import React, { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const BodyContent: React.FC = () => {
  const [desmatamento, setDesmatamento] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/comparar_desmatamento/');
        const data = await response.json();

        console.log('Dados recebidos da API:', data);

        if ('porcentagem_desmatamento' in data) {
          setDesmatamento(data.porcentagem_desmatamento);
        } else {
          console.error('Propriedade porcentagem_desmatamento ausente na resposta da API');
        }
        //setDesmatamento(data.quantidadeDesmatada);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []); // Executa apenas na montagem do componente
 

  return (
    <Flex direction="column" align="center"  p="4" h="100vh">
      <Flex gap={4} >
        <img src="/src/assets/2021.jpg" alt="Satélite 1" style={{ width: '35%' }} />
        <img src="/src/assets/2022.jpg" alt="Satélite 2" style={{ width: '35%' }} />
      </Flex>
      {desmatamento !== null && (
        <Text fontSize="xl" mt="4">
          Desmatamento de {desmatamento.toFixed(2)}% em relação ao ano anterior
        </Text>
      )}
    </Flex>
  );
};

export default BodyContent;


