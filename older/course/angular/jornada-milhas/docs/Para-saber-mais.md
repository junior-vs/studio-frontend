
# Curso 1

## 1.1. Para saber mais: explorando o projeto no Figma

Figma no desenvolvimento de um projeto
O Figma é uma ferramenta de design colaborativo amplamente utilizada por profissionais da área. No contexto do desenvolvimento front-end, o Figma desempenha um papel crucial ao permitir que as pessoas desenvolvedoras visualizem o projeto de design de um site de forma interativa.

Ao ter acesso ao layout, cores, tipografia e elementos visuais definidos no Figma, as pessoas desenvolvedoras podem entender a visão do designer e implementar a interface de forma fiel ao que foi concebido. Além disso, o Figma facilita a comunicação entre designers e devs, permitindo que ambos trabalhem em conjunto para garantir a consistência visual e a qualidade da experiência do usuário.

Como o Front-End utiliza o Figma?
Se você busca saber mais sobre como uma pessoa dev utiliza o Figma, recomendamos o vídeo "Como o Front-End Utiliza o Figma", que você pode assistir [clicando aqui](https://cursos.alura.com.br/extra/alura-mais/como-front-end-utiliza-o-figma-c858). Este vídeo aborda os conceitos básicos e práticos do uso do Figma, fornecendo uma introdução valiosa para quem deseja explorar essa poderosa ferramenta de design.

## 1.2 Para saber mais: quais são as diferenças entre SASS e SCSS?

O que é SASS?
O SASS (Syntactically Awesome Style Sheets ou Folhas de Estilo Sintaticamente Espetaculares) é um pré-processador de CSS, o que significa que ele é processado antes de ser convertido em CSS puro. Ele oferece recursos adicionais para facilitar a escrita de estilos em projetos web e uma sintaxe mais avançada em relação ao CSS tradicional, como variáveis, aninhamento de seletores, mixins e funções.

Ao ser compilado para CSS, o SASS produz um código otimizado e compatível com todos os navegadores. Assim, é amplamente utilizado para aumentar a produtividade e a flexibilidade no desenvolvimento front-end.

Mas e onde entra o SCSS nessa história?
O SASS tem duas sintaxes e uma delas é o SCSS! A sintaxe SCSS usada no curso, na qual adicionamos ao arquivo a extensão .scss, é usada com mais frequência. É um superconjunto de CSS, o que significa que todo CSS válido também é válido em SCSS.

Já a sintaxe SASS, na qual adicionamos ao arquivo a extensão .sass, é mais incomum: ela usa recuo em vez de chaves para aninhar instruções e novas linhas em vez de ponto e vírgula para separá-las. Você consegue observar essa diferença de sintaxes na documentação (em inglês) do SASS, [clicando aqui](https://sass-lang.com/guide#:~:text=With%20that%20in%20mind%2C%20here%27s%20an%20example%20of%20some%20typical%20styles%20for%20a%C2%A0site%27s%20navigation%3A).

Para aprender sobre SASS
Caso você tenha sentido curiosidade em saber mais sobre como o SASS funciona e como utilizar a sintaxe SCSS em seus projetos para otimizar a estilização, recomendamos o curso [SASS: CSS sintaticamente espetacular](https://cursos.alura.com.br/course/sass-css-sintaticamente-espetacular), do instrutor Guilherme Lima, que aborda o uso do SASS desde os primeiros passos.

## 1 3 Para saber mais: uso do ng-content para mais de um conteúdo

O `<ng-content>`
O ng-content é uma diretiva do Angular que permite a criação de componentes flexíveis e reutilizáveis, capazes de receber e exibir conteúdo dinâmico. É uma ferramenta poderosa para criar componentes genéricos que podem se adaptar a diferentes necessidades de conteúdo.

Uso do `<ng-content>` para múltiplas injeções de conteúdo
Ao criar componentes reutilizáveis, muitas vezes é necessário injetar diferentes tipos de conteúdo em posições específicas. Por exemplo, em um componente de layout, você pode ter a necessidade de inserir um cabeçalho, um corpo e um rodapé. O desafio é como permitir que esses conteúdos sejam inseridos de forma flexível, sem a necessidade de criar múltiplas propriedades de entrada.

Controlando o conteúdo injetado com o select
O seletor select é usado em conjunto com o ng-content para especificar quais elementos serão inseridos em cada ponto de inserção. Ele permite filtrar os elementos que serão injetados em um determinado ponto de inserção, fornecendo maior controle sobre a estrutura e o estilo do componente.

Exemplo:

Suponha que você está criando um componente chamado `<app-home>` que possui dois pontos de inserção de conteúdo: título e conteúdo. Você pode utilizar o select para especificar quais elementos serão inseridos em cada ponto de inserção. Veja o exemplo abaixo:

```typescript
<app-home>
    <div class=”titulo”>
      <h1>Título </h1>
    </div>
    <div class=”conteudo”>
      <p>Conteúdo…</p>
    </div>
</app-home>
```

Acima, criamos o template de `<app-home>` com o título e conteúdo que devem ser padronizados.

Em seguida, passamos no template do container o ng-content com o select para injetar o conteúdo nos pontos de inserção conforme desejarmos:
```typescript
<ng-content select=".titulo"></ng-content>
<div class="content-body">
  <ng-content select=".conteudo"></ng-content>
</div>
``` 

Nesse exemplo, o conteúdo dentro do elemento com a classe titulo será injetado no primeiro ponto de inserção` <ng-content select=".titulo"></ng-content>`, enquanto o conteúdo dentro do elemento com a classe conteudo será injetado no segundo ponto de inserção `<ng-content select=".conteudo"></ng-content>`. Dessa forma, você tem controle total sobre quais elementos são injetados em cada ponto específico do componente.

**Fechamento uso ng-content**

O ng-content é uma ferramenta poderosa no desenvolvimento de componentes reutilizáveis e flexíveis. Ele permite que você crie componentes genéricos que podem se adaptar a diferentes necessidades de conteúdo, proporcionando maior controle sobre a estrutura e o estilo. Ao usar o ng-content em conjunto com o select, você pode criar componentes altamente customizáveis, capazes de receber e exibir múltiplos tipos de conteúdo de forma dinâmica.

## 1.4 Para saber mais: personalizando modal com MatDialog

**O componente Dialog do Angular Material**

O componente `Dialog` do Angular Material é um recurso poderoso que permite a criação e abertura de modais na aplicação. O modal é uma janela flutuante que requer a atenção do usuário antes de continuar interagindo com o restante da aplicação.

**Personalização do modal**

Ao utilizar o método `open` do componente `Dialog`, é possível especificar diversas propriedades para personalizar o comportamento e a aparência do modal. No exemplo da aula, em `form-busca.component.ts`, onde configuramos a abertura do modal, utilizamos a propriedade width para definir a largura como 50%, que será passada por um objeto de configuração que será o segundo parâmetro do `dialog.open`, como você pode conferir abaixo:

```typescript

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
```

**Explorando a documentação oficial**

O width é apenas uma das propriedades disponíveis. Recomendamos a consulta da documentação oficial do Dialog do Angular Material para saber mais sobre as propriedades e seus respectivos valores para personalizar os modais de acordo com as necessidades do projeto e obter mais exemplos de uso. Confira a seguir algumas das propriedades que você pode consultar na documentação:

- height: permite definir a altura do Dialog;
- data: possibilita a passagem de dados para o Dialog, permitindo que informações sejam compartilhadas entre componentes;
- disableClose: controla se o Dialog pode ser fechado pelo usuário clicando fora de sua área.

Em resumo, o componente Dialog do Angular Material permite a criação de modais flexíveis e interativos na aplicação, e as diversas propriedades disponíveis oferecem controle e personalização sobre o comportamento e a aparência desses modais.

# Curso 2

## 2.1 Para saber mais: trabalhando com Serviços Singleton

No Angular, os serviços são classes que têm a responsabilidade de fornecer funcionalidades específicas e compartilhadas em toda a aplicação. Ele é fundamental para separação de preocupações isolando a lógica de negócios e manipulação de dados do restante do código.

Estes serviços são injetáveis, o que significa que eles podem ser facilmente utilizados e compartilhados entre componentes, diretivas e outros serviços, e podem ser instanciados várias vezes, dependendo da forma como são utilizados. Mas, e quando queremos ter uma única instância de um serviço em toda a aplicação? Para isso é possível torná-lo um Singleton.

O Singleton é um design pattern que visa garantir que apenas uma única instância de uma determinada classe exista em todo o sistema. Ele é útil quando é necessário controlar e restringir o número de instâncias de uma classe específica, garantindo que todos os componentes que dependem dela acessem a mesma instância compartilhada. E para configurar um serviço para ser um Singleton, pode fornecer no nível raiz da hierarquia de injeção de dependência ou usando o modificador providedIn: 'root', como no código abaixo:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  // Implementação do serviço
}

```
O uso deste padrão é benéfico quando se precisa ter controle sobre a criação de instâncias e garantir que apenas uma única instância seja utilizada no sistema. Isso pode ser útil em casos como gerenciamento de recursos compartilhados, acesso a bancos de dados, configurações globais, entre outros.

Porém, é importante tomar cuidado ao utilizar o padrão Singleton, pois ele pode introduzir dependências globais e dificultar o teste unitário. É preciso avaliar se a utilização desse padrão é realmente necessária e se há alternativas mais adequadas para o contexto específico do problema a ser resolvido.

## 2.2 Para saber mais: cache com shareReplay

O operador shareReplay é uma funcionalidade poderosa do RxJS que permite armazenar em cache o resultado de um Observable. Isso é especialmente útil quando lidamos com dados que não mudam com frequência, como a lista de unidades federativas do formulário de busca de passagens aéreas.

Ao utilizar o shareReplay, podemos evitar chamadas desnecessárias à API. Uma vez que os dados já foram buscados, eles são armazenados em cache e podem ser reutilizados, proporcionando um melhor desempenho e otimização da aplicação.

No contexto do serviço de Unidades Federativas, utilizamos o shareReplay para armazenar a resposta da requisição HTTP feita à rota '/estados'. Quando o método listar() é chamado, é verificado se já existe uma resposta armazenada em cache. Se sim, essa resposta é retornada diretamente, evitando uma nova chamada à API. Caso contrário, é feita a requisição e o resultado é armazenado em cache para futuras requisições.

OshareReplay é uma ferramenta incrível que nos ajuda a melhorar o desempenho das aplicações. Se você quiser saber mais detalhes sobre como ele funciona debaixo dos panos, confira a documentação oficial do shareReplay do RxJS.

## 2.3 Para saber mais: ControlValueAccessor

A classe ControlValueAccessor é uma interface do Angular que permite que um componente personalizado tenha uma comunicação bidirecional com o Angular Forms.

Esta interface faz a interação com o formulário permitindo o uso das diretivas ngModel, formControl e formGroup. Ao implementar a interface ControlValueAccessor, um componente personalizado pode interagir com o estado e os valores dos controles de formulário do Angular.

A interface ControlValueAccessor possui quatro métodos principais que devem ser implementados:

1. `writeValue(value: any)`: Este método é chamado pelo Angular Forms para atualizar o valor do componente personalizado com base no valor fornecido pelo formulário. O componente deve atualizar sua visualização e estado interno de acordo com o novo valor.
2. `registerOnChange(fn: any)`: Este método é usado para registrar uma função de retorno de chamada que será chamada pelo componente personalizado sempre que houver alterações em seu valor interno. O componente deve chamar essa função sempre que o valor for alterado para notificar o Angular Forms sobre as alterações.
3. `registerOnTouched(fn: any)`: Este método é usado para registrar uma função de retorno de chamada que será chamada pelo componente personalizado quando ele for tocado ou sofrer uma alteração no estado de foco. O componente deve chamar essa função sempre que ocorrer uma interação com ele, como um clique ou foco.
4. `setDisabledState(isDisabled: boolean)`: Este método é usado para definir o estado de desabilitado do componente personalizado com base no valor fornecido pelo formulário. O componente deve atualizar sua visualização e comportamento de acordo com o estado de desabilitado.

Ao implementar a interface ControlValueAccessor, um componente personalizado se torna compatível com o sistema de formulários do Angular e pode ser usado de forma transparente, assim o componente pode receber valores do formulário, notificar o formulário sobre as alterações em seu valor interno e reagir a eventos como toque e alteração de foco.

# Curso 3

[Repositorio](https://github.com/alura-cursos/3213-jornada-milhas)
