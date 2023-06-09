export const renderPopularButton = (switching1, switching2) =>
  `
    <div
            class="d-flex border border-dark rounded-pill align-items-center"
          >
            <div>
              <h4
                class="py-2 px-4 m-0 border border-dark rounded-pill bg-success"
              >
                ${switching1}
              </h4>
            </div>
            <div><h4 class="py-2 px-4 m-0">${switching2}</h4></div>
          </div>
        </div>`;
