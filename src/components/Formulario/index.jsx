import { useState, useEffect } from "react";
import "./formulario.css";
const Formulario = () => {
    // useState retorna um array com o estado e a função para atualizar o estado
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [notaMinima, setNotaMinima] = useState(0);
    const [nome, setNome] = useState("");
    // Função que renderiza a nota media do aluno

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou ");
        };
    });

    useEffect(() => {
        console.log("o estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("Materia a mudou para " + materiaA);
    }, [materiaA]);

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        const mediaFixed = media.toFixed(2);

        if (mediaFixed >= notaMinima) {
            return (
                <p>
                    {" "}
                    Olá {nome} Você foi aprovado com a nota: {mediaFixed}
                </p>
            );
        } else {
            return <p>Olá {nome} Você foi reprovado</p>;
        }
    };

    const alteraNome = (evento) => {
        setNome((estadoAnterior) => {
            // retorna o ultimo resultado faltando uma letra
            // console.log(estadoAnterior);

            return evento.target.value;
        });
    };

    return (
        <form>
            <ul>
                {[1, 2, 3, 4].map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input
                type="number"
                placeholder="Digite a nota minima"
                onChange={({ target }) => setNotaMinima(parseInt(target.value))}
            />
            <input
                type="number"
                min={0}
                max={10}
                placeholder="Nota materia A"
                onChange={(evento) =>
                    setMateriaA(parseInt(evento.target.value))
                }
            />
            <input
                type="number"
                min={0}
                max={10}
                placeholder="Nota materia B"
                onChange={({ target }) => setMateriaB(parseInt(target.value))}
            />
            <input
                type="number"
                min={0}
                max={10}
                placeholder="Nota materia C"
                onChange={(evento) =>
                    setMateriaC(parseInt(evento.target.value))
                }
            />
            <p>Resultado</p>
            {renderizaResultado()}
        </form>
    );
};

export default Formulario;
