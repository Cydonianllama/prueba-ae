/*
 * Ejercicio: define una clase que, al presionar “See All Insights”, muestre las
 * tarjetas ocultas inicialmente. Considera accesibilidad y rendimiento; luego
 * instancia la clase solo cuando el componente exista en la página.
 */


class ArticlesPreviews {

  ARTICLE_CLASS = 'c-articles-previews'

  getArticlesRef() {
    return document.querySelectorAll(`.${this.ARTICLE_CLASS}`)
  }

  articleAction(articleRef, action = 'remove-hidden') {
    if (!articleRef) return console.warn('not articleRef in reference')

    if (action == 'remove-hidden') {
      articleRef.classList.remove('hidden')
    } else {
      console.warn('incorrect action')
    }
  }


  removeHiddenArticles() {
    const articles = this.getArticlesRef()

    if (!articles) return;

    articles.forEach((el, index) => {
      this.articleAction(el, 'remove-hidden')
    })
  }


  instanceListeners() {
    // BTN SEE MORE
    const btnSeeAllinsights = document.getElementById('btnseemore')
    if (btnSeeAllinsights) {
      btnSeeAllinsights.addEventListener('click', () => {
        this.removeHiddenArticles()
      })
    }
  }

  constructor() {
    this.instanceListeners();
  }
}

document.addEventListener('DOMContentLoaded',  () => {
  new ArticlesPreviews();
});