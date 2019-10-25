import Home from 'components/page/home/home.page';
import FormikBasic from 'components/page/formik-basic/formic-basic.page';
import FormikReducingBoilerPlate from 'components/page/formik-reducing-boilerplate/formik-reducing-boilerplate.page';
import FormikField from 'components/page/formik-custom-field/formik-custom-field.page';
import MuFormikForm from 'components/page/mu-formik-form/mu-formik-form.page';
import SuFormikForm from 'components/page/su-formik-form/su-formik-form.page';
import ShouldCOmponentUpdate from 'components/page/should-component-update/should-component-update.page';
import IndivInputForm from 'components/page/indiv-input-form/indiv-input.page';
import MemoAndCallbackForm from 'components/page/memo-n-use-callback/memo-n-use-callback.page';

import { NavItemWithPages } from './nav.types';
import { getFlattenedNavItems } from './nav.util';

const navData_1: NavItemWithPages[] = [
  {
    path: '/formik-basic',
    text: 'FormikBasic',
    component: FormikBasic,
    pages: [],
  },

  {
    path: '/formik-reducing-boiler-plate',
    text: 'Formik Reducing Boiler Plate',
    component: FormikReducingBoilerPlate,
    pages: [],
  },

  {
    path: '/formik-field',
    text: 'Formik Field',
    component: FormikField,
    pages: [],
  },

  {
    path: '/mu-formik-form',
    text: 'Material UI Formik Form',
    component: MuFormikForm,
    pages: [],
  },

  {
    path: '/su-formik-form',
    text: 'Semantic UI Formik Form',
    component: SuFormikForm,
    pages: [],
  },

  {
    path: '/should-component-update-form',
    text: 'Should Component Update Form',
    component: ShouldCOmponentUpdate,
    pages: [],
  },

  {
    path: '/indiv-input-form',
    text: 'Indiv Input Form',
    component: IndivInputForm,
    pages: [],
  },

  {
    path: '/memo-n-callback-form',
    text: 'Memo And Callback Form',
    component: MemoAndCallbackForm,
    pages: [],
  },
];

export const navItemWithPages: NavItemWithPages = {
  path: '/',
  text: 'Home',
  component: Home,
  pages: navData_1,
};

export const flattenedNavItems = getFlattenedNavItems(navItemWithPages);
