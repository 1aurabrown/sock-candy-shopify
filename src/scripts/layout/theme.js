// Global imports for all views using default layout

// Styles

import '../../styles/theme.css'

// External

import mela from 'mela'
import 'regenerator-runtime/runtime'
import 'lazysizes/plugins/object-fit/ls.object-fit'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/rias/ls.rias'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes'
import 'lazysizes/plugins/respimg/ls.respimg'

// Shopify

import {load} from '@shopify/theme-sections'

// Global Sections
import '../sections/header'

const animations = mela()

document.addEventListener("DOMContentLoaded", function(event) {
  animations();
  // Update fade-in-on-scroll effect when sections change inside the theme editor
  document.addEventListener("shopify:section:load", animations);
  document.addEventListener("shopify:section:unload", animations);
  load('*');
});