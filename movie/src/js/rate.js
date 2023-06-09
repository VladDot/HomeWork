export const rate = (vote_average) => {
  if (vote_average * 10 >= 0 && vote_average * 10 <= 33) {
    return `<div class="rate bg-danger"> ${vote_average * 10} %</div>`;
  } else if (vote_average * 10 > 33 && vote_average * 10 <= 66) {
    return `<div class="rate bg-warning"> ${vote_average * 10} %</div>`;
  } else if (vote_average * 10 > 66 && vote_average * 10 <= 100) {
    return `<div class="rate bg-success"> ${vote_average * 10} %</div>`;
  }
};

export const movieRate = (vote_average) => {
  if (vote_average * 10 >= 0 && vote_average * 10 <= 33) {
    return `<div class="movie-rate border border-danger rounded-circle bg-danger"> ${Math.round(
      vote_average * 10
    )} %</div>`;
  } else if (vote_average * 10 > 33 && vote_average * 10 <= 66) {
    return `<div class="movie-rate border rounded-circle border-warning bg-warning"> ${Math.round(
      vote_average * 10
    )} %</div>`;
  } else if (vote_average * 10 > 66 && vote_average * 10 <= 100) {
    return `<div class="movie-rate border rounded-circle border-success bg-success"> ${Math.round(
      vote_average * 10
    )} %</div>`;
  }
};
