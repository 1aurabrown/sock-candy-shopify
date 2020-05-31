// Global imports for all views using default layout


// External

import { listen } from 'quicklink'
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
  listen()
  animations({
    reset: true,
    threshold: .1
  })
  load('*');
});

document.addEventListener("shopify:section:load", function(event) {
  animations({
    reset: true,
    threshold: .1
  });
})