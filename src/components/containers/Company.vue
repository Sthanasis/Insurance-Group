<template>
  <div class="Company pageContainer">
    <div class="colors">
      <div style="background-color: var(--lblue)"></div>
      <div style="background-color: var(--yellow)"></div>
      <div style="background-color: var(--pink)"></div>
      <div style="background-color: var(--mustard)"></div>
      <div style="background-color: var(--lgreen)"></div>
    </div>
    <div class="header">
      <span>
        Η εταιρεία μας
      </span>
    </div>
    <h3 style="margin: 40px 0">
      Η Efthymiou Athanasios - Insurance Group ιδρύθηκε το 1991 για την παροχή
      ασφαλιστικών χρηματοικονομικών υπηρεσιών για να κάνει τη ζωή σας πιο
      εύκολη.
    </h3>
    <div>
      <h3>Σε τι ξεχωρίζουμε και ποιό είναι το δικό σας όφελος.</h3>
      <ul>
        <li>Aσφάλεια, αξιοπιστία και εμπιστοσύνη από το 1991.</li>
        <li>
          Συνεργαζόμαστε με εταιρείες οι οποίες παρέχουν υπηρεσίες ασφάλισης που
          βρίσκονται<br />
          στην πλειοψηφία των εταιρειών της λίστας "Fortune 500" και σε
          εκατομμύρια<br />
          σε ολόκληρο τον κόσμο
        </li>
        <li>
          Οι πελάτες μας εμπιστεύονται γιατί τους στηρίζουμε όταν πραγματικά το
          έχουν ανάγκη. <br />
          Μεριμνούμε για τις χρηματοοικονομικές τους ανάγκες, προστατεύουμε την
          περιουσία τους <br />
          και την επιχείρηση τους και τους βοηθάμε να σχεδιάσουν το μέλλον τους.
        </li>
        <li>
          Προσφέρουμε πρωτοποριακά, ολοκληρωμένα προϊόντα, πάντα με γνώμονα τις
          ανάγκες σας.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Company {
  border-bottom: 2px solid var(--lblue);
}

.colors {
  position: absolute;
  left: 0;
}

.colors div {
  width: 10px;
  height: 60px;
}

.Company ul {
  font-size: 18px;
  color: var(--lblue);
  padding-left: 20px;
}

.Company ul li {
  margin: 10px 0;
  font-weight: bold;
}

.Company ul li:last-of-type {
  margin-bottom: 40px;
}
</style>
