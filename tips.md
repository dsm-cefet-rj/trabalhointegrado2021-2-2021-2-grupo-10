Sobre positions:

Primeiro eh static, que eh o default.

Quando vc tem um container que se posiciona em relacao a outro, como por exemplo um container que se posiciona em relacao a um outro container, vc pode usar a propriedade position para definir a posicao do container. Para isso, o container pai/mae deve ter a propriedade position definida diferente de static,
absolute ou relative (normalmente relative), se for static, vai pegar a posicao relativa ao avo/etc que possui uma position diferente de static, ate chegar a tag <html></html>.

Pode ser, dentro da linguagem do BEM, um bloco que eh definido com um nav, e subelementos que sao definidos como nav-item, nav-link, ou a, esses elementos, possuem modificadores de hover etc. Ok. Ai como posicionar eles, vai ser colocando no bloco pai/mae nav um position absolute/relative, e nos filhos vai posicionar eles como relative, q vai pegar a posicao do pai. Nesse caso, tambem existe a opcao de definir um flexbox, 
para a navbar, e dai posicionar os elementos como flex-items, e vai pegar a posicao relativa ao pai.

Fixed position (fixa a posicao do elemento)bom para navbar tbm, independente da posicao do viewport,
fixed fica fixo no viewport, e esta posicionado relativo ao HTML.

Sticky position eh bom para adicionar dinamica visual, primeiro eh relativo, e quando o scroll chegar ao topo, vai ficar fixo.


Principais seletores do CSS:

Elementos (tags html, )
Classes (quase todo html tag tem para distinguir elementos comuns, com estilos em comum, .)
Ids (para identificar elementos por um id unico, #)

Podemos fazer uma classe, e compor um elemento com outras classes pra ter uma especie de 
especificacao do estilo da classe mae.

```
.cls-mae {
    background-color: #fff;
    border: 5px solid #000;
}

.cls-filha {
    color: #000;
}

<div class="cls-mae cls-filha">
    <p>Texto</p>
</div>
```

Para especificar combinacoes de seletores temos dois tipos:
- Combinacao hierarquica
- Combinacao simples

A combinacao hierarquica vai pegar os niveis da arvore de elementos, 
e definimos com espacos 

```
.ancestor .child {
    property: value;
}
```

A combinacao simples vai pegar os elementos diretamente, a combinacao atributos de um elemento
que caracteriza um grupo de elementos

```
header.h1 {
    property: value;
}
```

Se dois seletores compartilham do mesmo valor, mas sao independentes, podemos colocar uma virgula 
entre eles:


```
h1, h2 {
    property: value;
}
```

Para selecionar todos elementos do HTML, usamos * como seletor.

em, rem eh normalmente usado relativo a fonte, font-size, eh uma metrica relativa a fontsize.
% eh relativo ao viewport se for um elemento q esta como fixed ou static, ou relativo ao tamanho do 
componente pai se ele tiver position absolute ou relative, ou sticky, qlqr um q nao seja static.

Dica de width e height, quando for calcular esses, para incluir o padding e border no calculo use:

```
*, *::before, *::after {
    box-sizing: border-box;
}
```

uma dica boa de responsividade de grids ou flexbox:
```
.grid-ish {
    flex-wrap: wrap;
    display: flex;
}

.grid-ish > * {
    flex: 1 1 10em;
}
```

vai permitir que os elementos da grid ou flex box tenham um comportamento
mais responsivo sem media queries, migrar do formato grid pra vertical so
no mobile

e usar tbm flex-basis: 100% vai manter colunas com tamanho igual

```
.even-columns {
    display: flex;
}

.even-columns > * {
    flex-basis: 100%;
}
```


para ter espaco entre as grids, use gap do flexgrid ou grid



----------

rem eh melhor pra adaptar o tamanho do texto no arquivo relativo a body font-size root

para calcular mais facil com rem, coloque html { font-size: 62.5%; }, que o valor 
do rem vai ser 1rem = 10px

para max width, ch eh interessante pq a unidade eh o tamanho da largura do elemento 'o',
que seria neutro, e quando pensamos em legibilidade, como em python 79-75 digitos em uma linha
sao suficientes para legibilidade, entao vamos manter max-width em 75ch para o content

use a min-height, %

paddind or margin, em ou rem tbm, 

------------

outline: 1px solid red; para debug

------------

Direct child selector >
childs select (space )

everything after
~

only next
+

--------------

toda pseudoclasse tem um atributo, um valor
tipo hover, focus, checked, required, disabled, active, visited, etc.

---------------

nth-child(2n, 2n+1 etc)
pode passar uma formula pra selecionar de acordo com uma formula

----------------

every which not include classe
element:not(.classe)

-----------------

pseudoelements

::before, ::after para adicionar elementos a um elemento visual

------------------


background-blend-mode para editar a composicao de background

---------------------

aspect-ratio para conservar a dimensao de um elemento

----------------------

para objetos:

scale, rotate, translate, transform

-----------------------

resize:horizontal
overflow:hidden

para usuario editar formato dos cards

-----------------------

calc, executa um calculo

-----------------------

scroll padding top
scroll behavior smooth

--------------------------

para manipular o DOM:



---------------------

Frameworks base:
Next.js + Nest.js

Tracking de Eventos de Usuario:
IntersectionObserver: tracking exposure/view
element.addEventListener: click, mouseover (hover), scroll, input (type)
navigator.sendBeacon: send data to server on session ending

Tracking de performance:
PerformanceObserver: tracking performance


