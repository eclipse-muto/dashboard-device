//
//  Copyright (c) 2022 Composiv.ai, Eteration A.S. and others
//
// All rights reserved. This program and the accompanying materials
// are made available under the terms of the Eclipse Public License v2.0
// and Eclipse Distribution License v1.0 which accompany this distribution.
//
// The Eclipse Public License is available at
//    http://www.eclipse.org/legal/epl-v10.html
//    and the Eclipse Distribution License is available at
//    http://www.eclipse.org/org/documents/edl-v10.php.
//
// Contributors:
//    Composiv.ai, Eteration A.S. - initial API and implementation
//
//
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ParamDetail = () => {
  const location = useLocation()
  const [parameter] = useState(location.state?.parameter)

  return (
       <h2>{parameter.pName}</h2>
  )
}

export default ParamDetail
