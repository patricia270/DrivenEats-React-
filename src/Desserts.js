import React from "react";

export default function Desserts ({desserts, ativar}) {

    return (
        <div className="sobremesas">
            {desserts.map((dessert, index) => <Dessert key={index} dessert={dessert} ativar={ativar}/>)}
        </div>
    )
}

function Dessert ({dessert, ativar}) {
  const [selecionada, setSelecionada] = React.useState("");
  const [aparecer, setAparecer] = React.useState("none");
  const [contador, setContador] = React.useState(0);

  function selecionar () {

    if(selecionada === ""){
      setSelecionada("selecionado");
      setAparecer("");
      plus();
      ativar();
    }
  }
  function deselecionar () {
    setSelecionada("");
    setAparecer("none");
    dessert.qtd = 0;
  }
  function plus () {
      setContador(contador + 1);
      dessert.qtd += 1;
      ativar();
  }
  function diminuir () {
    if(dessert.qtd === 1){
      deselecionar();
      setContador(() => contador - 1);
      dessert.qtd = 0;
    }
    else if(dessert.qtd > 0){
      setContador(() => contador - 1);
      dessert.qtd -= 1;
    }
    ativar();
  }
    return (
        <div className={`sobremesa ${selecionada}`} onClick={selecionar}>
                <img src={dessert.img} alt="imagem-da-sobremesa"/>
                <div className="informacoes">
                    <p className="nome-produto">{dessert.nome}</p>
                    <p className="descricao-produto">{dessert.descricao}</p>
                    <p className="preco">R$ {dessert.preco}</p>
                    <div className={`operations ${aparecer}`}> 
                      <div className="diminuir">
                        <ion-icon onClick={diminuir}  name="remove-sharp"></ion-icon>
                      </div>             
                      <span className="contador">{contador}</span>
                      <div className="plus">
                        <ion-icon onClick={plus} name="add-outline"></ion-icon>
                      </div> 
                    </div>
                </div>
        </div>
    )
}