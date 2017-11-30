// @flow
/* eslint-disable no-unused-expressions */
import request from 'supertest'
import { expect } from 'chai'
import app from '../app.js'
import pkg from '../../package.json'

describe('GET /', () => {
  it('should render properly', async () => {
    await request(app)
      .get('/')
      .expect(200)
  })
})

describe('GET /', () => {
  it('should render properly text', done => {
    request(app)
      .get('/')
      .query({})
      .expect(200)
      .then(resp => {
        expect(resp.text).to.equal(`Hi World, I'm ${pkg.name}`)
        done()
      })
  })
})
