import Footer from '../../components/footer';
import Header from '../../components/header';
import React from 'react';
import style from './style.module.scss';

buildPage();

function buildPage(){
    Header();
    Footer();
}

function header() {
    const headerElem = document.querySelector('.header');
    headerElem.innerHTML = Header();
}

function footer() {
    const footerElem = document.querySelector('.footer');
    footerElem.innerHTML = Footer();
}




const Homescreen = () => {
    
    return (
        <div className={style.Homescreen}>
                <h2>This is the home page</h2>
               
        </div>



    );
}

export default Homescreen;


{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue. 
Metus dictum at tempor commodo ullamcorper. Dignissim convallis aenean et tortor at risus viverra. Lacus sed turpis tincidunt id. Sed nisi lacus sed viverra. 
Justo donec enim diam vulputate ut pharetra sit amet. Faucibus purus in massa tempor nec feugiat. Eget egestas purus viverra accumsan in nisl. 
Gravida arcu ac tortor dignissim convallis aenean et tortor at. Senectus et netus et malesuada fames ac turpis egestas. 
Iaculis eu non diam phasellus vestibulum lorem sed. Condimentum mattis pellentesque id nibh tortor id aliquet. In fermentum et sollicitudin ac orci.</p>

<p>Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Massa id neque aliquam vestibulum morbi blandit cursus risus. Convallis posuere morbi leo urna. 
Elit eget gravida cum sociis natoque penatibus et magnis. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Blandit massa enim nec dui nunc mattis enim. 
At augue eget arcu dictum varius. Et pharetra pharetra massa massa ultricies mi. Sit amet nulla facilisi morbi. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. 
Sed euismod nisi porta lorem mollis aliquam ut. At lectus urna duis convallis convallis. Congue eu consequat ac felis donec et. Tristique risus nec feugiat in. 
Nulla malesuada pellentesque elit eget gravida cum sociis. Massa ultricies mi quis hendrerit dolor. Ultrices dui sapien eget mi. 
Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ultrices vitae auctor eu augue ut lectus arcu.</p>

<p>Sem fringilla ut morbi tincidunt augue interdum velit euismod. Arcu dui vivamus arcu felis bibendum ut. Enim sit amet venenatis urna cursus eget nunc. 
Scelerisque in dictum non consectetur a erat. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Nisl tincidunt eget nullam non nisi est sit. 
Tincidunt vitae semper quis lectus nulla at volutpat diam ut. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. 
Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Diam sollicitudin tempor id eu nisl. Sodales neque sodales ut etiam sit amet. 
Luctus accumsan tortor posuere ac. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut etiam sit amet nisl purus in mollis nunc sed.</p>

<p>Eget velit aliquet sagittis id consectetur. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Habitant morbi tristique senectus et. 
Tortor pretium viverra suspendisse potenti nullam ac. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Odio morbi quis commodo odio aenean. 
Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Et ligula ullamcorper malesuada proin libero. 
Aliquet risus feugiat in ante metus dictum at. At varius vel pharetra vel turpis nunc eget lorem. Cras ornare arcu dui vivamus. Ipsum faucibus vitae aliquet nec ullamcorper sit. 
Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Mauris vitae ultricies leo integer malesuada nunc vel risus.</p>

<p>Adipiscing elit pellentesque habitant morbi tristique senectus. Bibendum ut tristique et egestas. Arcu cursus vitae congue mauris rhoncus aenean vel. 
Ipsum nunc aliquet bibendum enim. Nibh tellus molestie nunc non. Amet consectetur adipiscing elit pellentesque habitant. Turpis massa sed elementum tempus egestas sed. 
Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. 
Praesent tristique magna sit amet purus gravida quis blandit. Facilisis volutpat est velit egestas dui id ornare. Ornare arcu dui vivamus arcu felis bibendum ut tristique et.
Rutrum quisque non tellus orci ac auctor augue mauris augue. </p> */}