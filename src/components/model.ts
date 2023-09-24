
/**
 * represents the properties of a "Link" component.
 * @interface
 *  
 */
export interface LinkProps{
  route:string,
  title:string,

}

export interface HeadingProps{
  title: string,
  descreption:string,
}
/**
 * @deprecated
 */
export interface BackBtnProps{
  isValidRoute: boolean,
}