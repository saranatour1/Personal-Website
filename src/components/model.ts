

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

/**
 * @type
 * Single Project type prop
 */
export interface ProjectProps {
  project: SingleProject,
}
export interface SingleProject {
  title:string,
  caption: string, 
  affiliatedWith: string,
  links:{
    github: string, 
    live?:string,
  }
}