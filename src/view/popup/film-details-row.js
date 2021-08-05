export const createFilmDetailsRow = (title, text) => (
  `<tr class="film-details__row">
      <td class="film-details__term">${title}</td>
         <td class="film-details__cell">
            ${text}
         </td>
   </tr>`
);
