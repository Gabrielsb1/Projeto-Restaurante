import styles from "./Cardapio.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Cardapio() {
  return (
    <body className={styles.my_body}>
      
      <div className={styles.h1_Cardapio}>
        <h1>Conheça o Cardápio</h1>
      </div>

      <div className={styles.bebidas}></div>

      <main className={styles.my_Cardapio_Main}>


        <div className={styles.card_Cardapio}>
          <img src={"https://jcconcursos.com.br/media/_versions/noticia/prato-feito_1_widelg.jpg"}></img>
          <h2>Filé com fritas</h2>
          <p className={styles.descricao_prato}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam asperiores repellendus quasi vel ipsam molestias fugit atque
            qui deserunt
          </p>
          <button className={styles.button_carrinho}>
            Opções
          </button>
        </div>

        <div className={styles.card_Cardapio}>
          <img src={"https://www.elevenrio.com.br/storage/2020/01/assorted-japanesse-food-2323398.jpg"}></img>
          <h2>Shusui</h2>
          <p className={styles.descricao_prato}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam asperiores repellendus quasi vel ipsam molestias fugit atque
            qui deserunt
          </p>
          <button className={styles.button_carrinho}>
            Adicionar ao carrinho
          </button>
        </div>

        <div className={styles.card_Cardapio}>
          <img src={"https://www.otempo.com.br/image/contentid/policy:1.2466840:1617289984/bacalhau-gomes-sa-sexta-feira-santa-receita-facil-gostoso-paixao-jpeg.jpeg?f=3x2&w=1224"}></img>
          <h2>Vatapá</h2>
          <p className={styles.descricao_prato}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam asperiores repellendus quasi vel ipsam molestias fugit atque
            qui deserunt
          </p>
          <button className={styles.button_carrinho}>
            Adicionar ao carrinho
          </button>
        </div>

        <div className={styles.card_Cardapio}>
          <img src={"https://blog.biglar.com.br/wp-content/uploads/2021/10/typical-brazilian-dish-called-feijoada-made-with-black-beans-pork-sausage.jpg"}></img>
          <h2>Feijoada</h2>
          <p className={styles.descricao_prato}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam asperiores repellendus quasi vel ipsam molestias fugit atque
            qui deserunt
          </p>
          <button className={styles.button_carrinho}>
            Adicionar ao carrinho
          </button>
        </div>

        <div className={styles.card_Cardapio}>
          <img src={"https://cdn-icons-png.flaticon.com/512/8634/8634777.png"}></img>
          <h2>Indisponível</h2>
          <p className={styles.descricao_prato}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam asperiores repellendus quasi vel ipsam molestias fugit atque
            qui deserunt
          </p>
          <button className={styles.button_carrinho}>
            Adicionar ao carrinho
          </button>
        </div>

        <div className={styles.card_Cardapio}>
          <img src={"https://cdn-icons-png.flaticon.com/512/8634/8634777.png"}></img>
          <h2>Indisponível</h2>
          <p className={styles.descricao_prato}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam asperiores repellendus quasi vel ipsam molestias fugit atque
            qui deserunt
          </p>
          <button className={styles.button_carrinho}>
            Adicionar ao carrinho
          </button>
        </div>

        <div className={styles.card_Cardapio}>
          <img src={"https://cdn-icons-png.flaticon.com/512/8634/8634777.png"}></img>
          <h2>Indisponível</h2>
          <p className={styles.descricao_prato}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam asperiores repellendus quasi vel ipsam molestias fugit atque
            qui deserunt
          </p>
          <button className={styles.button_carrinho}>
            Adicionar ao carrinho
          </button>
        </div>

        <div className={styles.card_Cardapio}>
          <img src={"https://cdn-icons-png.flaticon.com/512/8634/8634777.png"}></img>
          <h2>Indisponível</h2>
          <p className={styles.descricao_prato}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam asperiores repellendus quasi vel ipsam molestias fugit atque
            qui deserunt
          </p>
          <button className={styles.button_carrinho}>
            Adicionar ao carrinho
          </button>
        </div>

        <div className={styles.card_Cardapio}>
          <img src={"https://cdn-icons-png.flaticon.com/512/8634/8634777.png"}></img>
          <h2>Indisponível</h2>
          <p className={styles.descricao_prato}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam asperiores repellendus quasi vel ipsam molestias fugit atque
            qui deserunt
          </p>
          <button className={styles.button_carrinho}>
            Adicionar ao carrinho
          </button>
        </div>
      </main>
    </body>
  );
}

export default Cardapio;
