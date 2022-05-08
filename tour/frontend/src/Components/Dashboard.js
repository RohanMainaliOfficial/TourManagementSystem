import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserStyle from './Dashboard.module.css';
import Navbar from "./Navbar";
import Footer from "./footer";
import './card_view.css'

export default class Dashboard extends Component {

    constructor(props){
    super(props);
    this.state={
          packages:[],
           }
       this.fetchPackage=this.fetchPackage.bind(this)

    };

    componentWillMount(){
        this.fetchPackage()

    }
// ----------------------feting Data from api --------------------------------------------------------------
    fetchPackage(){

        console.log("Fetching....")
        fetch('http://127.0.0.1:8000/api/packages/')
        .then(response=>response.json())
        .then(data=>this.setState({packages:data}))

        console.log(this.state.packages);

    }

  render() {
    var viewportHeader = document.querySelector(".viewport-header");
        var packages=this.state.packages


    document.body.addEventListener("scroll", function (event) {
      var opacity =
        (document.body.offsetHeight - document.body.scrollTop) /
        document.body.offsetHeight;
      var scale =
        (document.body.offsetHeight - document.body.scrollTop) /
        document.body.offsetHeight;
      document.documentElement.style.setProperty("--headerOpacity", opacity);
      document.documentElement.style.setProperty("--headerScale", scale);
    });

                {packages.map(function(package_item){
                console.log(package_item)
            if(package_item.category==="popular"){console.log(package_item.name)}


             })}



    return (
      <div>

        <div className={UserStyle.container}>
          <header className={UserStyle.video_header} >
               <Navbar/>



<video className={UserStyle.video}src="http://127.0.0.1:8000/media/posts/video.mp4" autoplay="autoplay" loop="loop"
         playsinline="playsinline" muted="muted"></video>
<div className={UserStyle.Title}>
            <h1 className={UserStyle.firstLine}>
              We Provide
              <span> BEST
              </span>
            </h1>
            <h1 className={UserStyle.secondLine}>Tour Packages all over Nepal
            </h1>

            <a href="#packages">
            <button className={UserStyle.bookBtn}>Book Now!</button>
            </a>

            </div>


        </header>
         <div className={UserStyle.popularPackage}>
         <h1 id="packages" class="packageCategoryTitle">Popular Packages</h1>

         <div class="popularPackagesList">


            {packages.map(function(package_item){
            if(package_item.category==="Popular" && package_item.discount===0){
             return(


                  <div class="column">
                    <div class="wsk-cp-product">

                      <div class="wsk-cp-img">
                        <img src={'http://127.0.0.1:8000'+package_item.image} />
                      </div>
                      <div class="wsk-cp-text">

                        <div class="title-product">
                          <h2 class="titleProduct">{package_item.name}</h2>
                        </div>

                        <div class="card-footer">
                          <div class="wcf-left"><span class="price">Rs. {package_item.price}</span></div>

                        </div>
                      </div>
                </div>
              </div>

             )}

              if(package_item.category==="Popular" && package_item.discount!==0){
             return(


                  <div class="column">
                    <div class="wsk-cp-product">
                    <div id="discountTag">
                    <div className="discountLabel">{package_item.discount}% OFF</div>
                    </div>
                      <div class="wsk-cp-img">
                        <img src={'http://127.0.0.1:8000'+package_item.image} />
                      </div>
                      <div class="wsk-cp-text">

                        <div class="title-product">
                          <h2 class="titleProduct">{package_item.name}</h2>
                        </div>

                        <div class="card-footer">
                          <div class="wcf-left"><span class="price"><del>Rs. {package_item.price}</del> Rs. {package_item.price -(package_item.price* package_item.discount)/100}</span></div>

                        </div>
                      </div>
                </div>
              </div>

             )

             }

             })}
             </div>
             </div>


             <div className={UserStyle.popularPackage}>
             <h1 class="packageCategoryTitle">Trekking Packages</h1>
                <div class="popularPackagesList">
            {packages.map(function(package_item){
            if(package_item.category==="Trekking" && package_item.discount===0){
             return(
              <div class="column">
                    <div class="wsk-cp-product">
                      <div class="wsk-cp-img">
                        <img src={'http://127.0.0.1:8000'+package_item.image} />
                      </div>
                      <div class="wsk-cp-text">

                        <div class="title-product">
                          <h2 class="titleProduct">{package_item.name }</h2>
                        </div>

                        <div class="card-footer">
                          <div class="wcf-left"><span class="price">Rs. {package_item.price}</span></div>

                        </div>
                      </div>
                </div>
              </div>

             )}
             if(package_item.category==="Trekking" && package_item.discount!==0){
             return(


                  <div class="column">
                    <div class="wsk-cp-product">
                    <div id="discountTag">
                    <div className="discountLabel">{package_item.discount}% OFF</div>
                    </div>
                      <div class="wsk-cp-img">
                        <img src={'http://127.0.0.1:8000'+package_item.image} />
                      </div>
                      <div class="wsk-cp-text">

                        <div class="title-product">
                          <h2 class="titleProduct">{package_item.name}</h2>
                        </div>

                        <div class="card-footer">
                          <div class="wcf-left"><span class="price"><del>Rs. {package_item.price}</del> Rs. {package_item.price -(package_item.price* package_item.discount)/100}</span></div>

                        </div>
                      </div>
                </div>
              </div>

             )

             }

             })}
           </div>
           </div>

           <div className={UserStyle.popularPackage}>
           <h1 class="packageCategoryTitle">Long Tour Packages</h1>

           <div class="popularPackagesList">
            {packages.map(function(package_item){
            if(package_item.category==="Long" && package_item.discount===0)
             return(
              <div class="column">
                    <div class="wsk-cp-product">
                      <div class="wsk-cp-img">
                        <img src={'http://127.0.0.1:8000'+package_item.image} />
                      </div>
                      <div class="wsk-cp-text">

                        <div class="title-product">
                          <h2 class="titleProduct">{package_item.name }</h2>
                        </div>

                        <div class="card-footer">
                          <div class="wcf-left"><span class="price">Rs. {package_item.price}</span></div>

                        </div>
                      </div>
                </div>
              </div>

             )

              if(package_item.category==="Long" && package_item.discount!==0){
             return(


                  <div class="column">
                    <div class="wsk-cp-product">
                    <div id="discountTag">
                    <div className="discountLabel">{package_item.discount}% OFF</div>
                    </div>
                      <div class="wsk-cp-img">
                        <img src={'http://127.0.0.1:8000'+package_item.image} />
                      </div>
                      <div class="wsk-cp-text">

                        <div class="title-product">
                          <h2 class="titleProduct">{package_item.name}</h2>
                        </div>

                        <div class="card-footer">
                          <div class="wcf-left"><span class="price"><del>Rs. {package_item.price}</del> Rs. {package_item.price -(package_item.price* package_item.discount)/100}</span></div>

                        </div>
                      </div>
                </div>
              </div>

             )

             }

             })}
           </div>
           </div>


              <div className={UserStyle.popularPackage}>
           <h1 class="packageCategoryTitle">Short Tour Packages</h1>

           <div class="popularPackagesList">
            {packages.map(function(package_item){
            if(package_item.category==="Short" && package_item.discount===0)
             return(
              <div class="column">
                    <div class="wsk-cp-product">
                      <div class="wsk-cp-img">
                        <img src={'http://127.0.0.1:8000'+package_item.image} />
                      </div>
                      <div class="wsk-cp-text">

                        <div class="title-product">
                          <h2 class="titleProduct">{package_item.name }</h2>
                        </div>

                        <div class="card-footer">
                          <div class="wcf-left"><span class="price">Rp500.000</span></div>

                        </div>
                      </div>
                </div>
              </div>

             )
             if(package_item.category==="Short" && package_item.discount!==0){
             return(


                  <div class="column">
                    <div class="wsk-cp-product">
                    <div id="discountTag">
                    <div className="discountLabel">{package_item.discount}% OFF</div>
                    </div>
                      <div class="wsk-cp-img">
                        <img src={'http://127.0.0.1:8000'+package_item.image} />
                      </div>
                      <div class="wsk-cp-text">

                        <div class="title-product">
                          <h2 class="titleProduct">{package_item.name}</h2>
                        </div>

                        <div class="card-footer">
                          <div class="wcf-left"><span class="price"><del>Rs. {package_item.price}</del> Rs. {package_item.price -(package_item.price* package_item.discount)/100}</span></div>

                        </div>
                      </div>
                </div>
              </div>

             )

             }


             })}
           </div>

           </div>





        </div>
        <div>
                 <Footer/>

        </div>

      </div>
    );
  }
}



