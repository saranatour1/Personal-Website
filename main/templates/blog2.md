# Bootstrap5 from Basics to advanced ‘not really’

### Main notes for todays meeting

---

- [x]  We will be reading some of the docs,  on how to start and how to look for things.
- [x]  we will compare the different libraries, Bootstrap, Foundation UI, Tachyons , Tailwind CSS.
- [x]  We will be making two examples, Desktop approach first.
- [ ]  we will make a landing page, mobile approach first.
- [x]  Some general notes, Background.
- [x]  make sure to upload these notes on GitHub, as well as the templates

Hello, This is a weird take on How You could use Bootstrap 5 (the latest version to date). There is nothing wrong with the documentation that is presented already, but some people asked me to do this so here I am, and If you find my English's to be weird, this is because it is not my first language! 

### Background

So, I would assume that there was nothing wrong with doing your own CSS to your websites or to even leave your website as horrendous looking as possible, But I would assume that making your own CSS (although its unique and can bring more creativity ) over and over and over again can be tiring and inconsistent, also creating your own media queries can take a long time, and at the end it will not be 100% accurate, that’s my assumption. 

<aside>
🔖  find  [CSS Zen garden](http://www.csszengarden.com/)  to see the different style sheets available. 
also check out [Can I use](https://caniuse.com/)? website to check if the CSS or html tag you are using works for every browser

</aside>

### Actual History

the concept of ‘CSS style guide’ for bootstrap was done by none other than twitter them selves, and they didn’t expect that developers world wide could make use of there CSS library etc. 

<aside>
🔖 Check out bootstrap first release! [here](https://getbootstrap.com/1.0.0/)

</aside>

# Diving in

So, in my opinion there is no better way of explaining the concept behind Bootstrap than to look at it from a CSS point of view, and you can always look at the documentation as a reference , cause I always tend to over **exaggerate** the important parts and topics. So here are some of the main things explained here, toggle the items to see what’s inside! 

<aside>
🔖 A Top down approach ,from big to small

</aside>

### Layouts, Display flex and grid

from your previous knowledge of CSS, We found out that Flex box and grid make your life 50% easier-my personal rating-, with that knowledge in mind we can simplify the terms when using CSS and bootstrap. 

### Using Flex box

in normal CSS, this is how we explain that an element has the property of flex:

![Untitled](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Untitled.png)

```html
<div class="flex">
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
  </div>
```

```css
.flex{
    display: flex;
    width: 90%;
  }
  .element{
    /* flex: 0.23; */
    width: 20%;
    height: 200px;
    background-color: lightskyblue;
    border: 1px solid black;
  }
```

to make the elements go from top to bottom, or left to right, we  use `flex-direction: column;` and `flex-direction: row;`  respectively. Note that the default is row. 

![Untitled](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Untitled%201.png)

to be able to move them around, based on size:

- when the default `flex-direction: row;` , to be able to move the items in the horizontal direction you use one of these:
    - `justify-content: flex-start;`
    - `justify-content: flex-end;`
    - `justify-content: space-around;`
    - `justify-content: space-between;`
    - `justify-content: space-evenly;`
    - `justify-content: center;`
    
    to be able to move the items on the vertical axis: 
    
    - `align-items: center;`
    - `align-items: flex-end;`
    - `align-items: flex-start;`
    - `align-items: baseline;`

<aside>
🔖 It’s always a good idea to make good use of the developer tools on chrome when using anything that is related to CSS, check it out [here](https://developer.chrome.com/docs/devtools/)

</aside>

Now the reason why we are all here from the first place: 

### Enabling flex behavior with Bootstrap 5

to enable flex behavior use : 

```html
<div class="d-flex p-2">I'm a flexbox container!</div>
```

![Untitled](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Untitled%202.png)

and for inline flex, use : `d-inline-flex`

 also, although we haven’t mentioned it yet but responsive values exist, sm, lg, md , xl: for example  `d-sm-flex`, these indicate the media queries set for each screen size, starting from lg and ending with ‘no size’ or other words small size, this is very important and very handy to manipulate.

1. flex direction 

| CSS  | Bootstrap |
| --- | --- |
| flex-direction:row; | flex-row |
| flex-direction: row-reverse; | flex-row-reverse |
| flex-direction: column; | flex-column |
| flex-direction: column-reverse; | flex-column-reverse |

and responsive variations are available as well, to use them just write size after the word flex, like so: `flex-md-row`.

1. Justify content 

| CSS  | Bootstrap |
| --- | --- |
| justify-content: flex-start; | justify-content-start |
| justify-content: flex-end; | justify-content-end |
| justify-content: space-around; | justify-content-around |
| justify-content: space-between; | justify-content-between |
| justify-content: space-evenly; | justify-content-evenly |
| justify-content: center; | justify-content-center |

and responsive variations are available as well, to use them just write size after the words justify-content, like so:`justify-content-sm-start`.

1. Align items 

| CSS  | Bootstrap |
| --- | --- |
| align-items: center; | align-items-center |
| align-items: flex-end; | align-items-end |
| align-items: flex-start; | align-items-start |
| align-items: baseline; | align-items-baseline |
| align-items: stretch; | align-items-stretch |

I’ll assume from this point on that the size comes after the property, to enable responsiveness use  the words align-items, like so:`align-items-sm-center`

1. align self 

| CSS  | Bootstrap |
| --- | --- |
| align-self: stretch; | align-self-stretch |
| align-self: center; | align-self-center |
| align-self: start; | align-self-start |
| align-self: end; | align-self-end |
1. flex- fill 

its a class that forces a series of sibling elements to force them into widths equal to their content while taking up all the available horizontal space. 

1. flex grow and shrink

to toggle the items ability to grow to fill the available space use `flex-grow-*` , with 0 and 1 as the respective values.

and same goes to shrink in the opposite direction, `flex-shrink-*`.

1. flex wrap 

3 possible variations: `flex-nowrap`,`flex-wrap`,`flex-wrap-reverse`

<aside>
🔖 Please make sure to read the documentation as this is just a plain **copy** from the documentation itself! [here](https://getbootstrap.com/docs/5.3/utilities/flex/#enable-flex-behaviors)

</aside>

 

### Using grid

basically , Containers are required to make use of bootstrap’s grid system. 

<aside>
🔖 Take a look at the examples provided in the documentation on containers and grid [here](https://getbootstrap.com/docs/5.3/examples/grid/#containers)

</aside>

this table is very useful: 

|  | Extra small<576px | Small≥576px | Medium≥768px | Large≥992px | X-Large≥1200px | XX-Large≥1400px |
| --- | --- | --- | --- | --- | --- | --- |
| .container | 100% | 540px | 720px | 960px | 1140px | 1320px |
| .container-sm | 100% | 540px | 720px | 960px | 1140px | 1320px |
| .container-md | 100% | 100% | 720px | 960px | 1140px | 1320px |
| .container-lg | 100% | 100% | 100% | 960px | 1140px | 1320px |
| .container-xl | 100% | 100% | 100% | 100% | 1140px | 1320px |
| .container-xxl | 100% | 100% | 100% | 100% | 100% | 1320px |
| .container-fluid | 100% | 100% | 100% | 100% | 100% | 100% |

Now off to the grid:

The grid system of bootstrap has a default of 12 columns that you can make use of in your pages, it is really to implement check the docs again for a better view [here](https://www.notion.so/Bootstrap5-from-Basics-to-advanced-not-really-ccb72f12446547faa4c71320c32de581).

here are some notes: 

1. wrapping the elements in a container is very handy, as the columns themselves are responsive as well.
2. a handy class is :`col-{breakpoint}-auto` which sets the size for the columns based on the width of their content. 
3. you can use flex with grids, where you don’t need to specify ‘d-flex’ class. 
4. a handy class can be to specify the number of columns to each row, example: `row row-cols-2`, and if you set to auto it fits elements to the horizontal space:`row-cols-auto`
5. when nesting , the number of columns is related to the available space. 

### breakpoints

<aside>
🔖 Please go through the docs [here](https://getbootstrap.com/docs/5.3/layout/breakpoints/) to read more about screen sizes. 
Bootstrap uses We most commonly use `min-width` in their  media queries as it’s a mobile first approach.

</aside>

  See the table referenced above for break points: 

| Breakpoint | Class infix | Dimensions |
| --- | --- | --- |
| Extra small | None | <576px |
| Small | sm | ≥576px |
| Medium | md | ≥768px |
| Large | lg | ≥992px |
| Extra large | xl | ≥1200px |
| Extra extra large | xxl | ≥1400px |

Speaking of which let’s mention containers before going to grid 

### Margins and padding

margin and padding have the same ‘attributes’: 

- m stands for margin
- p stands for padding

the 4 sides: 

- t for top
- b for bottom
- s for start , left in left to right approach, and right for right to left approach.
- e for end,  right  in left to right approach, and left for right to left approach.
- x for horizontal spacing of the left and right.
- y for vertical spacing on top on bottom

sizes are from 0-5 , and you can set it to  auto

### Gap

When using `display: grid` or `display: flex`, you can make use of `gap`
 utilities on the parent element, it sets the spaces between the elements to what ever you set it.   

<aside>
🔖 Docs my friend. [here](https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding) , check the row gap and column gap classes. 
also check the gutters section [here](https://getbootstrap.com/docs/5.3/layout/gutters/)

</aside>

I am not going to go through the implementation of components in bootstrap since it is already in the documentation, I am going to jump to implementing bootstrap with examples. 

---

# Examples

I have taken a few simple examples to implement today using bootstrap, this examples are from [front end mentor](https://www.frontendmentor.io/home), and they are presented as newbie challenges. so lets start.

### 3-column-preview-card-component-main

<aside>
🔖 Here is a link oof the challenge: [here](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-/hub)

</aside>

My point today is to make this look as exact as possible, but I’ll ignore the simple things, and I’ll try to be less competitive. 

### Overview of the example

the website allows you to download all the files needed to maintain this challenge:

Desktop view: 

![desktop-design.jpg](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/desktop-design.jpg)

Mobile view: 

![mobile-design.jpg](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/mobile-design.jpg)

### Smaller approach

Jumping to Miro: 

![Untitled](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Untitled%203.png)

Now implementing this small approach:

How do you expect it to look with no css or bootstrap? UGLY ! 

![Untitled](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Untitled%204.png)

let’s start now piece by piece, although it’s not completely looking like the original , but I think it is coming together nicely: 

![Untitled](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Untitled%205.png)

I kind of went a little overboard,  but you can always go back to the commits, for the desktop view, we are some how finished:

![Untitled](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Untitled%206.png)

the mobile view should not take more time than the Desktop view, here’s the secondary approach: 

it’s almost the same 😅

![Screen Shot 2023-03-24 at 12.47.07.png](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Screen_Shot_2023-03-24_at_12.47.07.png)

```html
<div class="container container-sm container-md my-5 mx-auto">
      <!-- Row, parent to the smaller children  -->
      <div class="row mt-5 w-90 h-100 mx-auto row-col-3 justify-content-center">
        <!-- the smaller columns -->
        <!-- note that since they are identiical, do one and copy the rest -->

        <div
          class="col-10 col-sm-12 col-md-4 col-lg-3 orange p-5 justify-content-start w-90"
        >
          <div class="my-2">
          </div>
          <h3 class="text-left my-4 display-6">Sedans</h3>
          <p class="my-3">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <div class="mt-5">
            <button type="button" class="btn w-50">learn more</button>
          </div>
        </div>
        <div
          class="col-10 col-sm-12 col-md-4 col-lg-3 light-blue p-5 justify-content-start w-90"
        >
          <div class="my-2">
            <img src="images/icon-suvs.svg" alt="sedans icon" />
          </div>
          <h3 class="text-left my-4 display-6">SUVs</h3>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <div class="mt-5">
            <button type="button" class="btn w-50">learn more</button>
          </div>
        </div>
        <div
          class="col-10 col-sm-12 col-md-4 col-lg-3 green p-5 justify-content-start w-90"
        >
          <div class="my-2">
            <img src="images/icon-luxury.svg" alt="sedans icon" />
          </div>
          <h3 class="text-left my-4 display-6">Luxury</h3>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <div class="mt-5">
            <button type="button" class="btn w-50">learn more</button>
          </div>
        </div>
      </div>
    </div>
```

### Qr-code card component

another easy take is the Qr-code card component offered by the front end mentor.

<aside>
🔖 Find the challenge [here](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H/hub)

</aside>

the Desktop design: 

![desktop-design.jpg](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/desktop-design%201.jpg)

the mobile design:

![mobile-design.jpg](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/mobile-design%201.jpg)

this should be fairly easy! , jumping to Miro: 

![Untitled](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Untitled%207.png)

and this is how it looks like with no css or anything else, which is normal: 

![Untitled](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Untitled%208.png)

For the desktop view , the theme is done :

![Screen Shot 2023-03-24 at 13.53.48.png](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Screen_Shot_2023-03-24_at_13.53.48.png)

but when we switch to the mobile view (600px and less) 

![Screen Shot 2023-03-24 at 13.55.16.png](Bootstrap5%20from%20Basics%20to%20advanced%20%E2%80%98not%20really%E2%80%99%20ccb72f12446547faa4c71320c32de581/Screen_Shot_2023-03-24_at_13.55.16.png)

OK So it’s not working for me but I will try to fix it :) 

### clipboard-landing-page

This I will do with the kids later on, But if you have noticed we have been looking at bootstrap the wrong way! , bootstrap is a mobile first approach, this means that we start from the mobile design first and scale up as we go, let’s use this approach in the next design! 

<aside>
📢 I did not have enough time to finish this , to be continued  🙂, 
thank for reading and I hope this was helpful for you.

</aside>