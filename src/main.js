import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from '../src/AgeCalculator.js';

$(document).ready(function() {
  $("#ageCalculator").click(function(event) {
    event.preventDefault();
    const birthdate = $("input#birthdate").val();
    const planet = $("input#planet").val();
