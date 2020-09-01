export default (st) => `
<section id="Saresults">
<h1>Suicide Awareness and Prevention</h1>
<div>
<select id="mental_illness" name="mentalIllness" class="sbField" value="${st.Mental_Illness}" required>
    <option disabled selected value="Mental Illness">Mental Illness</option>
    <option value="Anxiety">Anxiety</option>
    <option value="Depression">Depression</option>
    <option value="PTSD">PTSD</option>
</select>
</div>
<div id="container" class="container">
    <div id="idk">
    </div>
</div>
</section>
`;
