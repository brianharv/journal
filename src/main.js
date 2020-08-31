import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Entry from './entries.js';

//User Input Logic
$("#entry").submit(function(event) {
  event.preventDefault();
  
  const titleInput = $("input#userTitle").val();
  const bodyInput = $("input#userBody").val();
  let entry = new Entry(titleInput, bodyInput);
  console.log(entry);
  $("input#userTitle").val("");
  $("input#userBody").val("");
})