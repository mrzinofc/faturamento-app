import React, { useEffect, useState } from "react";
import faturamentoData from "../data/faturamento.json";
import FaturamentoCard from "./FaturamentoCard";

/* Calcular o menor, maior faturamento e o número de dias acima da média */

const FaturamentoInfo = () => {
  const [menorValor, setMenorValor] = useState(null);
  const [maiorValor, setMaiorValor] = useState(null);
  const [diasAcimaMedia, setDiasAcimaMedia] = useState(0);
  const [media, setMedia] = useState(0);

  useEffect(() => {
    const faturamentos = faturamentoData.filter(dia => dia.valor > 0);
    
    const menor = Math.min(...faturamentos.map(dia => dia.valor));
    const maior = Math.max(...faturamentos.map(dia => dia.valor));
    const total = faturamentos.reduce((acc, dia) => acc + dia.valor, 0);
    const media = total / faturamentos.length;
    
    const diasAcima = faturamentos.filter(dia => dia.valor > media).length;

    setMenorValor(menor);
    setMaiorValor(maior);
    setMedia(media);
    setDiasAcimaMedia(diasAcima);
  }, []);

  return (
    <div>
      <h1>Informações de Faturamento</h1>
      <div className="cards">
        <FaturamentoCard titulo="Menor Valor" valor={menorValor} />
        <FaturamentoCard titulo="Maior Valor" valor={maiorValor} />
        <FaturamentoCard titulo="Média Mensal" valor={media.toFixed(2)} />
        <FaturamentoCard titulo="Dias Acima da Média" valor={diasAcimaMedia} />
      </div>
    </div>
  );
};

export default FaturamentoInfo;
