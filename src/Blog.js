import React from "react";
import Header from "./Blog/Header";
import Nav from "./Blog/NavMenu";
import NavItem from "./Blog/NavItem";
import UserControl from "./Blog/UserControl";
import BlogArticle from "./Blog/BlogArticle";
import BlogImage from "./Blog/BlogImg";
import BlogTitle from "./Blog/BlogTitle";
import BlogContent from "./Blog/BlogContent";
import Comments from "./Blog/Comments";
import Footer from "./Blog/Footer";

export default function Blog() {
  const comments = [
    {
      user: "Grace Hopper",
      comment: "Genial artículo!"
    },
    {
      user: "Hedy Lamarr",
      comment: "Muy bueno! Gracias por compartir"
    }
  ];
  return (
    <div>
      <Header>
        <Nav>
          <NavItem path="/home">Home</NavItem>
          <NavItem path="/about-us">Sobre mí</NavItem>
          <NavItem path="/contact">Artículos</NavItem>
        </Nav>
        <UserControl user="Ada" />
      </Header>
      <BlogArticle>
        <BlogImage img="imagen.jpg" />
        <BlogTitle>Cómo hacer un proyecto en React</BlogTitle>
        <BlogContent>Lorem ipsum...</BlogContent>
      </BlogArticle>
      <Comments comments={comments} />
      <Footer>® 2020 - All rights reserved</Footer>
    </div>
  );
}
