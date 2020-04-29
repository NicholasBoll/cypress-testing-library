function getElements(jqueryOrElement) {
  if (Cypress.dom.isJquery(jqueryOrElement)) {
    return jqueryOrElement.toArray()
  } else if (Cypress._.isArray(jqueryOrElement)) {
    return jqueryOrElement
  }
  return [jqueryOrElement]
}

function getContainers(container) {
  const withinContainer = cy.state('withinSubject')
  if (withinContainer) {
    return withinContainer.toArray()
  }
  return getElements(container)
}

export {getElements, getContainers}

/* globals Cypress, cy */
