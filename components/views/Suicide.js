export default (st) => `
<div>
<select id="mental_illness" name="mentalIllness" class="sbField" value="${st.mental_Illness}" required>
    <option disabled selected value="Mental Illness">Mental Illness</option>
    <option value="Anxiety">Anxiety</option>
    <option value="Depression">Depression</option>
    <option value="PTSD">PTSD</option>
</select>
</div>
<div id="container" class="container">
</div>
`;


