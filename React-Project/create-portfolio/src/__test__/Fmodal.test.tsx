import React from "react";
import {describe, it, expect, vi} from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FModal from "../component/Fmodal";


const mockFields = [
    {
        name: 'title',
        label: 'Title',
        type: 'text',
        validation: {required: 'Title is required'},
    },
    {
        name: 'description',
        label: 'Description',
        type: 'textArea'
    }
];


