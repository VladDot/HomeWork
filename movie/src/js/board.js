export const mainBoard = () =>
  `<div class="container my-6">
    <div class="row">
      <div class="col">
        <section class="board d-flex align-items-center justify-content-center">
          <div class="info text-white p-5 mw-100">
            <div class="title">
              <h2 class="fs-1">Welcome.</h2>
              <p class="fs-2">
                Millions of movies, TV shows and people to discover. Explore
                now.
              </p>
            </div>
            <div class="mw-100">
              <form action="/search" class="position-relative">
                <div class="mt-5">
                  <input
                    type="text"
                    class="form-control rounded-pill mw-100 input-group mb-3"
                    placeholder="Search for a movie, tv show, person......"
                    aria-label="Search for a movie, tv show, person......"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn corol-btn rounded-pill"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>`;
