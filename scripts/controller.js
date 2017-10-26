/** Defined Fields **/
e_Body = document.body;
e_Navbar = document.querySelector(".navbar");
e_Content = document.querySelector(".contentWrapper");
e_Lightbox = document.querySelector("#lightbox_fs");
e_LBMainImg = document.querySelector("#lightbox_img");
// e_LB_imgs = document.querySelectorAll(".e_img");
e_LB_imgs = document.querySelector("#image01");
// e_LB_subImgs = document.querySelectorAll("#lightbox_bottom");
// e_LB_arrowL = document.querySelector("#lightbox_left");
// e_LB_arrowR = document.querySelector("#lightbox_right");

/** Code **/

// The following is deprecated: implemented in visuals_subpages.

// document.addEventListener("scroll", function()
// 	{
// 		if (e_Body.scrollTop > 460)
// 		{
// 			if (e_Navbar.classList)
// 			{
// 				e_Navbar.classList.add('sticky');
// 				e_Content.classList.add('exPadding');
// 			}
// 		}
// 		else
// 		{
// 			if (element1.classList)
// 			{
// 				e_Navbar.classList.remove('sticky');
// 				e_Content.classList.remove('exPadding');
// 			}
// 		}
// 	})

// e_LB_arrowL.addEventListener("click", lbArrows, false);
// e_LB_arrowR.addEventListener("click", lbArrows, false);

function lbArrows(e) {
	if (e.target !== e.currentTarget)
	{
		var clickedItem = e.target;

	}

	e.stopPropagation();
}


e_LB_imgs.addEventListener("click", openLightbox, false)

function openLightbox(e) {
	if (e.target !== e.currentTarget)
	{
		var clickedItem = e.target;

		e_LBMainImg.src = clickedItem.src;
		// openOthers(e);
		e_Lightbox.classList.add("lightsOut");
	}
	// if (e.target == e_LB_imgs)
	// {
	// 	alert("test");
	// 	e.stopPropagation();
	// }

	e.stopPropagation();
}

function openOthers(e)
{
	// alert(e.target.parentNode.classList);
	
	var imgTest = document.createElement('img');

	imgTest.src = e.target.src;

	var siblings = e.target.parentNode.getElementsByTagName('img');
	// var parentN = e.target.parentNode;

	// var parent = document.getElementById(parentN.id);

	// alert(parent);


	// var siblings = document.querySelectorAll('.e_img');

	// var siblings = parent.getElementsByTagName('img');

	var divTest = document.getElementById('lightbox_bottom');

	for (i = 0; i < siblings.length; i++)
	{
		var itest = document.createElement('img');
		itest.setAttribute('src', siblings[i].getAttribute('src'));

		// divTest.appendChild(itest);
		
		// alert(siblings[i]);
	}


	// var divTest = document.getElementById('lightbox_bottom');

	// divTest.appendChild(imgTest);

	// e_LB_subImgs.appendChild(imgTest);
}

// e_LB_imgs.forEach(function(lb_img)
// 	{
// 		lb_img.onclick = function()
// 		{
// 			e_LBMainImg.src = lb_img.src;
// 			e_Lightbox.classList.add("lightsOut");
// 		}
// 	});

// e_LB_imgs[0].onclick = function()
// {
// 	e_LBMainImg.src = e_LB_imgs[0].src;
// 	e_Lightbox.classList.add("lightsOut");
// }

// e_LB_imgs[1].onclick = function()
// {
// 	e_LBMainImg.src = e_LB_imgs[1].src;
// 	e_Lightbox.classList.add("lightsOut");
// }

// e_LB_imgs[2].onclick = function()
// {
// 	e_LBMainImg.src = e_LB_imgs[2].src;
// 	e_Lightbox.classList.add("lightsOut");
// }

// document.onload = function()
// {
// 	// alert("gah");
// 	for (var i = e_LB_imgs.length - 1; i >= 0; i--)
// 	{
// 		// alert("ugh");
// 		e_LB_imgs[i].onclick = (function ()
// 		{
// 			alert("...");
// 			e_LBMainImg.src = e_LB_imgs[i].src;
// 			e_Lightbox.classList.add("lightsOut");
// 			// alert("...2");
// 		});
// 	}
// }

// {
// 	for (var i = e_LB_imgs.length - 1; i >= 0; i--)
// 	{
// 		// alert("ugh");
// 		e_LB_imgs[i].onclick = (function abc(img_url)
// 		{
// 			alert("...");
// 			e_LBMainImg.src = img_url;
// 			e_Lightbox.classList.add("lightsOut");
// 			// alert("...2");
// 		})(e_LB_imgs[i].src);
// 	}
// }

// function abc(img)
// {
// 	e_LBMainImg.src = img;
// 	e_Lightbox.classList.add("lightsOut");
// }


e_Lightbox.onclick = function()
{
	e_Lightbox.classList.remove("lightsOut");
}
