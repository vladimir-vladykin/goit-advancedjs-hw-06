/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props: T) {
  }
}

interface TitleProperty {
  title: String
}

class Page extends Component<TitleProperty> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};