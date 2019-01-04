import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';

const Root = (props) => {
  
  const {children} = props;

  return (
    <React.Fragment>
    <NavBar />
        <div className="div1">
      
          {children}
          
        </div>
        <br />
        <br />
        <Footer />
    </React.Fragment>
  );
}

export default Root;
