import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled,
  ImageStyled
} from './style'

function Card({ value, label, color, image }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <LabelStyled>{label}</LabelStyled>
        <ValueStyled>{value}</ValueStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)