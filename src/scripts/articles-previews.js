/*
 * Ejercicio: define una clase que, al presionar “See All Insights”, muestre las
 * tarjetas ocultas inicialmente. Considera accesibilidad y rendimiento; luego
 * instancia la clase solo cuando el componente exista en la página.
 */


class ArticlesPreviews {

  // cantidad de articulos mostrados inicialmente
  #QTY_INITIAL_SHOWING = 3;

  // estado de mostrado
  #isShowingAll = false;

  // clase identificadora de las tarjetas
  #ARTICLE_CLASS = 'c-articles-previews'


  constructor() {
    this.instanceListeners();
  }

  //
  // Start Event
  //

  instanceListeners() {
    // BTN SEE MORE
    const btnSeeAllinsights = this.getButtonSeeMoreRef()
    if (btnSeeAllinsights) {
      btnSeeAllinsights.addEventListener('click', () => {
        if (this.#isShowingAll) {
          // just show 3 articles
          this.setShowing(false)
          this.showArticles('initials')
        } else {
          // show all articles
          this.setShowing(true)
          this.showArticles('all')
        }

        this.updateShowMoreButton()
      })
    }
  }

  //
  // get references
  //

  getArticlesRef() {
    return document.querySelectorAll(`.${this.#ARTICLE_CLASS}`)
  }

  getButtonSeeMoreRef() {
    return document.getElementById('btnseemore')
  }

  //
  //
  //

  setShowing(isShowingAll) {
    this.#isShowingAll = isShowingAll;
  }

  articleAction(articleRef, action = 'remove-hidden') {
    if (!articleRef) return console.warn('not articleRef in reference')

    if (action == 'remove-hidden') {
      articleRef.classList.remove('hidden')
    }
    else if (action == 'add-hidden') {
      articleRef.classList.add('hidden')
    }
    else {
      console.warn('incorrect action')
    }
  }

  showArticles(type = 'all') {
    const articles = this.getArticlesRef()
    if (!articles) return;
    // 

    if (type == 'all') {
      articles.forEach((el, index) => {
        this.articleAction(el, 'remove-hidden')
      })
    } else if (type == 'initials') {
      articles.forEach((el, index) => {
        if (index > this.#QTY_INITIAL_SHOWING - 1) {
          this.articleAction(el, 'add-hidden')
        }
      })
    }
  }



  //
  // button
  //

  updateShowMoreButton() {
    const refButton = this.getButtonSeeMoreRef()
    if (!refButton) return;

    if (!this.#isShowingAll) {
      refButton.innerHTML = 'See All insights'
    } else {
      refButton.innerHTML = 'Ocult'
    }
  }


}

document.addEventListener('DOMContentLoaded', () => {
  try {
    new ArticlesPreviews();
  } catch (ex) {
    console.log(ex.message)
  }
});