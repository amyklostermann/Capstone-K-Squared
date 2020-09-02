export default (st) => `
<section id="Saresults">
<h2>Suicide Awareness and Prevention</h2>
<div>
<select id="mental_illness" name="mentalIllness" class="sbField" value="${st.Mental_Illness}" required>
    <option disabled selected value="Mental Illness">Choose a Mental Illness</option>
    <option value="Anxiety">Anxiety</option>
    <option value="Depression">Depression</option>
    <option value="PTSD">PTSD</option>
</select>
</div>
<div id="supportAnimalsHeader">
<p><h5>Support Animals</h5></p>
</div/>
<div id="container" class="container">
    <div id="idk">
    <p>Please choose a mental illness from the drop-down above to see which animals will be most supportive for that particular illness.</p>
    </div>
</div>
<div id="hotline">
<p>If you or someone you know is having thoughts of suicide, or if you need guidance on how to help someone else, please call the<br><b>National Suicide Prevention Lifeline: 1-800-273-TALK (8255)</b> or visit <a href="https://afsp.org/">American Foundation for Suicide Prevention</a>
for more resources. 
</p>
</div>
</section>
`;



