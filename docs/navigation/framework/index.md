---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from './data'
</script>
<style src="../index.scss"></style>

# 一些导航，存点过冬

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
