<script setup lang="ts"></script>

<template>
  <footer>
    <div>
      <h2 class="logo">MNTM</h2>
      <p>Get out there & discover your next slope, mountain & destination!</p>
      <p class="copyright">Copyright 2019 MNTN, Inc. Terms & Privacy</p>
    </div>
    <div class="links">
      <div>
        <h3>More on The Blog</h3>
        <ul>
          <li>About MNTN</li>
          <li>Contributors & Writers</li>
          <li>Write For Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h3>More on MNTN</h3>
        <ul>
            <li>The Team</li>
            <li>Jobs</li>
            <li>Press</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: 280px;
  max-width: 1980px;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.logo {
  font-size: 32px;
  letter-spacing: 0.32px;
  margin-bottom: 24px;
}

.copyright {
  opacity: 0.5;
  margin-top: 100px;
}

.links {
  display: flex;
  gap: 150px;
}

.links div {
    line-height: 30px ;
}

h3 {
    margin-bottom: 30px;
}
</style>
