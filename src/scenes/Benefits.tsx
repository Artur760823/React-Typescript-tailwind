import { SelectedPage } from '@/shared/types';
import React from 'react';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  import { motion } from "framer-motion";
  import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {

    setSelecetedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelecetedPage }: Props) => {
  return (
    <div>Benefits</div>
  )
}

export default Benefits