export default() => `

<!-- This is our main container for our control.
The tabindex attribute is what allows the user to focus the control.
We'll see later that it's better to set it through JavaScript. -->
<div class="select" tabindex="0">

<!-- This container will be used to display the current value of the control -->
<span class="value">Mental Illnesses</span>

<!-- This container will contain all the options available for our control.
  Because it's a list, it makes sense to use the ul element. -->
<ul class="optList">
<!-- Each option only contains the value to be displayed, we'll see later
    how to handle the real value that will be sent with the form data -->
<li class="option">Anxiety</li>
<li class="option">Depression</li>
<li class="option">PTSD</li>
</ul>

  `;
