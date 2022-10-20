const calender = document.getElementById('calendar')
let Calender_content =
 `
 <div class="year-date">
 <div class="month-year">
     <span class="month">NOV</span>
     <span class="year">2022</span>
 </div>
 <div class="year-btn">
     <button><img src="img/backward.svg" alt=""></button>
     <button><img src="img/foward.svg" alt=""></button>
 </div>
</div>
<div class="days">
 <ul>
     <li>MON</li>
     <li>TUE</li>
     <li>WED</li>
     <li>THU</li>
     <li>FRI</li>
     <li>SAT</li>
     <li>SUN</li>
 </ul>
</div>
<div class="day">
 <ul>
     <li class="today">1</li>
     <li>2</li>
     <li>3</li>
     <li>4</li>
     <li>5</li>
     <li>6</li>
     <li>7</li>
     <li>8</li>
     <li>9</li>
     <li>10</li>
     <li class="selected-day">11</li>
     <li>12</li>
     <li>13</li>
     <li>14</li>
     <li>15</li>
     <li>16</li>
     <li>17</li>
     <li>18</li>
     <li>19</li>
     <li>20</li>
     <li>21</li>
     <li>22</li>
     <li>23</li>
     <li>24</li>
     <li>25</li>
     <li>26</li>
     <li>27</li>
     <li>28</li>
     <li>29</li>
     <li>30</li>
 </ul>
</div>
 ` 
calender.innerHTML = Calender_content