const authForm = document.getElementById('authForm');
const btnLogIn = document.getElementById('btnLogIn');
const btnSignUp = document.getElementById('btnSignUp');
const trendingNowNode = document.getElementById('trendingNow');
const trendingURL = 'https://newsapi.org/v2/top-headlines?pageSize=4&country=us&apiKey=2dd631fb64c448eeb8dcf36c491c022f';

btnLogIn.addEventListener('click', openLogInForm);
btnSignUp.addEventListener('click', openSignUpForm);
// btnCloseForm.addEventListener('click', closeAuthForm);


/**
 * this function use an API to get latest news to feed trending now section
 */
fetch(trendingURL)
    .then((apiResponse) => apiResponse.json())
    .then((data) => data.articles)
    .then((trending) => {
      trending.forEach((trend) => {
        createTrendsChildren(trend.urlToImage, trend.title);
      });
    })
    .catch();


/**  openLogInForm
    * opens the log in form
*/
function openLogInForm() {
  authForm.style.display = 'flex';
}
/**  openSignUpForm
    * opens the sign up form
*/
function openSignUpForm() {
  authForm.style.display = 'flex';
  fetch('/signup')
      .then((json) => json.json())
      .then((data) =>{
        authForm.innerHTML = data.form;
        const btnCloseForm = document.getElementById('btnCloseForm');
        btnCloseForm.addEventListener('click', closeAuthForm);
      },
      )
      .catch((e) => console.log('error', e));
}
/**  closeAuthForm
    * closes the auth form
*/
function closeAuthForm() {
  authForm.style.display = 'none';
}
/**
 * this function is to create the image and title of trends in main page
 * @param {string} trendImageURL The image url of the trend.
 * @param {string} trendTitle The title of the trend.
 */
function createTrendsChildren(trendImageURL, trendTitle) {
  const trendContainer = document.createElement('div');
  trendContainer.classList = 'trend';
  const trendImageElement = document.createElement('img');
  trendImageElement.src = trendImageURL;
  trendImageElement.classList = 'trend-image';
  trendContainer.appendChild(trendImageElement);
  const trendTitleBackgroundElement = document.createElement('div');
  trendTitleBackgroundElement.classList = 'trend-title-background';
  trendContainer.appendChild(trendTitleBackgroundElement);
  const trendTitleElement = document.createElement('h5');
  trendTitleElement.innerText = trendTitle;
  trendTitleElement.classList = 'trend-title';
  trendContainer.appendChild(trendTitleElement);
  trendingNowNode.appendChild(trendContainer);
}


