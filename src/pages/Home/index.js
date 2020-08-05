import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';


// import dadosIniciais from '../../data/dados_iniciais.json';


function Home() {
  
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) =>{
      console.log(categoriasComVideos[0].videos[0]);
      setDadosIniciais(categoriasComVideos);
    })
    .catch((err) => {
      console.log(err.message);
    });
  
  }, []);

  // http://localhost:8080/categorias?_embed=videos

  return (
    <PageDefault paddingAll={0}>
 
      {dadosIniciais.length === 0 && (<div>Loading... </div>)}
      
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
          key={categoria.id}
          category={categoria}
          />
        );
      })};

    </PageDefault>
  );
}

export default Home;
