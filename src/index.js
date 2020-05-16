import * as core from '@actions/core';
import {default as axios} from 'axios';
import {run} from './action';

async function init() {
  await run(core, axios, console);
}

init();
