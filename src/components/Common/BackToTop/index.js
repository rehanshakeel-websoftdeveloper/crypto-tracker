import React from 'react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import "./styles.css";

function BackToTop() {
    let mybutton = document.getElementById("myBtn");
    
    // when the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {
            mybutton.style.display = "flex";
        } else {
            mybutton.style.display = "none";
        }
    }

    // when the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
  return (
    <div className='back-to-top-btn' id='myBtn' onClick={() => topFunction()}>
        <ArrowUpwardRoundedIcon styles={{ color : "var(--blue)" }} />
    </div>
  )
}

export default BackToTop;