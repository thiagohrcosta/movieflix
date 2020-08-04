import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';

import dadosIniciais from '../../data/dados_iniciais.json';


function Home() {

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) =>{
      console.log(categoriasComVideos);
    })
    .catch((err) => {
      throw new Error('Erro');
    });
  
  });

  // http://localhost:8080/categorias?_embed=videos

  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Um veterano da Guerra do Vietnã usa todo seu treinamento e agressividade exercitada nos campos de batalha quando é preso e torturado por policiais."}        
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Footer />
    </div>
  );
}

export default Home;
